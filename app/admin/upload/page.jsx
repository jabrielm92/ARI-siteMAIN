"use client";

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminUploadPage() {
  const [file, setFile] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!file || !courseId) {
      setError('Please select a file and enter a course ID');
      return;
    }

    setUploading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('courseId', courseId);

      const response = await fetch('/api/upload-course', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Upload failed');
      }

      setResult({
        url: data.url,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
      });
      
      // Reset form
      setFile(null);
      setCourseId('');
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Upload Course Files</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-6">
                <div>
                  <Label htmlFor="courseId">Course ID</Label>
                  <Input
                    id="courseId"
                    placeholder="e.g., course-001"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    disabled={uploading}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Use: course-001, course-002, course-003
                  </p>
                </div>

                <div>
                  <Label htmlFor="file">Course ZIP File</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".zip"
                    onChange={(e) => setFile(e.target.files[0])}
                    disabled={uploading}
                  />
                  {file && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Selected: {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={uploading || !file || !courseId}
                  className="w-full"
                  size="lg"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 mr-2" />
                      Upload Course File
                    </>
                  )}
                </Button>

                {result && (
                  <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-green-700 dark:text-green-400 mb-2">
                          Upload Successful!
                        </p>
                        <p className="text-sm mb-1">
                          <strong>URL:</strong>
                        </p>
                        <code className="text-xs bg-muted p-2 rounded block break-all">
                          {result.url}
                        </code>
                        <p className="text-sm mt-2">
                          <strong>Size:</strong> {result.size}
                        </p>
                        <p className="text-xs text-muted-foreground mt-3">
                          ✓ File uploaded to Vercel Blob<br />
                          ✓ Course data will be updated automatically
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-700 dark:text-red-400">
                          Upload Failed
                        </p>
                        <p className="text-sm text-muted-foreground">{error}</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-3">Course IDs:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li><code>course-001</code> - How To Make Money With AI</li>
                  <li><code>course-002</code> - Build Your Brand Online With AI</li>
                  <li><code>course-003</code> - Advanced Lead Generation Mastery</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
