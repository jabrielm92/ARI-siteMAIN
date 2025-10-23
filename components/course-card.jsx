"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/50">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.heroImage}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {course.featured && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Badge variant="outline">{course.category}</Badge>
          <span className="text-xs">{course.level}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {course.subtitle}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-foreground">
            ${course.price}
          </span>
          {course.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${course.originalPrice}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        {course.comingSoon ? (
          <Button disabled className="w-full" size="lg">
            Coming Soon
          </Button>
        ) : (
          <Button asChild className="w-full" size="lg">
            <Link href={`/courses/${course.slug}`}>
              View Details
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
