import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { coursesData } from '@/lib/courses-data';

export const runtime = 'nodejs'; // ensure node runtime for server-side libs like @vercel/blob

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const courseId = formData.get('courseId');

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!courseId) {
      return NextResponse.json(
        { success: false, error: 'No course ID provided' },
        { status: 400 }
      );
    }

    // Verify course exists
    const course = coursesData.find((c) => c.id === courseId);
    if (!course) {
      return NextResponse.json(
        { success: false, error: `Course ${courseId} not found` },
        { status: 404 }
      );
    }

    // Upload to Vercel Blob
    const blob = await put(`courses/${courseId}/${file.name}`, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      courseId: courseId,
      courseName: course.title,
      size: file.size,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: (error && error.message) || String(error) },
      { status: 500 }
    );
  }
}
