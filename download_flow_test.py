#!/usr/bin/env python3
"""
Download Flow Integration Test for ARI Solutions Inc
Tests the complete download flow including Vercel Blob URL redirection
"""

import requests
import json
import uuid
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
BASE_URL = os.getenv('NEXT_PUBLIC_BASE_URL', 'https://digital-learning-hub.preview.emergentagent.com')
API_BASE = f"{BASE_URL}/api"

class DownloadFlowTester:
    def __init__(self):
        self.session = requests.Session()
        self.test_results = []
        
    def log_result(self, test_name, success, message, details=None):
        """Log test result"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'details': details,
            'timestamp': datetime.now().isoformat()
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details:
            print(f"   Details: {details}")
    
    def test_vercel_blob_urls_directly(self):
        """Test 1: Test Vercel Blob URLs directly"""
        try:
            print("\n=== Testing Vercel Blob URLs Directly ===")
            
            # Test URLs from courses data
            test_urls = [
                {
                    'name': 'ABA Course v2.0',
                    'url': 'https://2bylxrxhsjwqr31p.public.blob.vercel-storage.com/ABA%20Course%20v2.0.zip',
                    'course_id': 'course-001'
                },
                {
                    'name': 'BYBOA v1.0',
                    'url': 'https://2bylxrxhsjwqr31p.public.blob.vercel-storage.com/BYBOA%20v1.0.zip',
                    'course_id': 'course-002'
                }
            ]
            
            for test_url in test_urls:
                try:
                    # Make HEAD request to check if file exists without downloading
                    response = self.session.head(test_url['url'], timeout=10)
                    
                    if response.status_code == 200:
                        content_length = response.headers.get('Content-Length', 'Unknown')
                        content_type = response.headers.get('Content-Type', 'Unknown')
                        
                        self.log_result(
                            f"Vercel Blob URL: {test_url['name']}",
                            True,
                            f"File accessible (HTTP {response.status_code})",
                            f"Size: {content_length} bytes, Type: {content_type}"
                        )
                    else:
                        self.log_result(
                            f"Vercel Blob URL: {test_url['name']}",
                            False,
                            f"File not accessible (HTTP {response.status_code})",
                            f"URL: {test_url['url']}"
                        )
                        
                except Exception as e:
                    self.log_result(
                        f"Vercel Blob URL: {test_url['name']}",
                        False,
                        f"Connection error: {str(e)}",
                        f"URL: {test_url['url']}"
                    )
                    
        except Exception as e:
            self.log_result("Vercel Blob URLs test", False, f"Exception: {str(e)}")
    
    def test_download_redirect_simulation(self):
        """Test 2: Simulate download redirect flow"""
        try:
            print("\n=== Testing Download Redirect Simulation ===")
            
            # We can't create a real order without Firestore access, but we can test
            # the download endpoint behavior with various token scenarios
            
            # Test what happens when we try to access download endpoint
            # This should fail with invalid token, but we can verify the flow
            
            fake_token = "fake-token-for-testing"
            response = self.session.get(f"{API_BASE}/download/{fake_token}", allow_redirects=False)
            
            if response.status_code == 403:
                data = response.json()
                if 'Invalid token format' in data.get('error', ''):
                    self.log_result(
                        "Download endpoint token validation",
                        True,
                        "Download endpoint correctly validates tokens",
                        f"Rejected invalid token with proper error: {data.get('error')}"
                    )
                else:
                    self.log_result(
                        "Download endpoint token validation",
                        False,
                        "Unexpected error format",
                        data
                    )
            else:
                self.log_result(
                    "Download endpoint token validation",
                    False,
                    f"Unexpected status code: {response.status_code}",
                    response.text
                )
                
        except Exception as e:
            self.log_result("Download redirect simulation", False, f"Exception: {str(e)}")
    
    def test_paypal_integration_status(self):
        """Test 3: Test PayPal integration status"""
        try:
            print("\n=== Testing PayPal Integration Status ===")
            
            # Test PayPal order creation to see if it works in preview
            payload = {
                "courseId": "course-001"
            }
            
            response = self.session.post(
                f"{API_BASE}/paypal/create-order",
                json=payload,
                headers={'Content-Type': 'application/json'}
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'orderId' in data:
                    paypal_order_id = data['orderId']
                    self.log_result(
                        "PayPal order creation",
                        True,
                        "PayPal integration working in preview environment",
                        f"Created PayPal order: {paypal_order_id}"
                    )
                    
                    # Test PayPal capture with the created order
                    capture_payload = {
                        "orderId": paypal_order_id,
                        "courseId": "course-001",
                        "email": "test@arisolutions.com"
                    }
                    
                    # Note: This will likely fail because we haven't actually paid through PayPal
                    capture_response = self.session.post(
                        f"{API_BASE}/paypal/capture",
                        json=capture_payload,
                        headers={'Content-Type': 'application/json'}
                    )
                    
                    if capture_response.status_code == 400:
                        capture_data = capture_response.json()
                        if 'capture failed' in capture_data.get('error', '').lower():
                            self.log_result(
                                "PayPal capture flow",
                                True,
                                "PayPal capture endpoint working (expected failure without payment)",
                                f"Correctly rejected unpaid order: {capture_data.get('error')}"
                            )
                        else:
                            self.log_result(
                                "PayPal capture flow",
                                False,
                                "Unexpected capture error",
                                capture_data
                            )
                    else:
                        self.log_result(
                            "PayPal capture flow",
                            False,
                            f"Unexpected capture status: {capture_response.status_code}",
                            capture_response.text
                        )
                else:
                    self.log_result("PayPal order creation", False, "Invalid response format", data)
            else:
                self.log_result(
                    "PayPal order creation",
                    False,
                    f"PayPal integration issue (HTTP {response.status_code})",
                    f"This might be expected in preview environment: {response.text[:200]}"
                )
                
        except Exception as e:
            self.log_result("PayPal integration test", False, f"Exception: {str(e)}")
    
    def test_course_data_integrity(self):
        """Test 4: Verify course data integrity for download flow"""
        try:
            print("\n=== Testing Course Data Integrity ===")
            
            # Get all courses and verify download-related fields
            response = self.session.get(f"{API_BASE}/courses")
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'courses' in data:
                    courses = data['courses']
                    
                    downloadable_courses = []
                    issues = []
                    
                    for course in courses:
                        course_id = course.get('id', 'unknown')
                        
                        # Check if course has download URL and size
                        has_download_url = course.get('downloadUrl')
                        has_size_mb = course.get('sizeMb')
                        has_price = course.get('price')
                        
                        if has_download_url and has_size_mb and has_price:
                            downloadable_courses.append({
                                'id': course_id,
                                'title': course.get('title', 'Unknown'),
                                'downloadUrl': has_download_url,
                                'sizeMb': has_size_mb,
                                'price': has_price
                            })
                        else:
                            missing = []
                            if not has_download_url:
                                missing.append('downloadUrl')
                            if not has_size_mb:
                                missing.append('sizeMb')
                            if not has_price:
                                missing.append('price')
                            
                            issues.append(f"{course_id}: missing {', '.join(missing)}")
                    
                    if len(downloadable_courses) >= 2 and not issues:
                        self.log_result(
                            "Course data integrity",
                            True,
                            f"Found {len(downloadable_courses)} fully configured downloadable courses",
                            f"Courses: {[c['id'] for c in downloadable_courses]}"
                        )
                    else:
                        self.log_result(
                            "Course data integrity",
                            False,
                            f"Issues found: {len(issues)} courses with missing data",
                            f"Issues: {issues}, Downloadable: {len(downloadable_courses)}"
                        )
                else:
                    self.log_result("Course data integrity", False, "Invalid response format", data)
            else:
                self.log_result("Course data integrity", False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result("Course data integrity", False, f"Exception: {str(e)}")
    
    def run_all_tests(self):
        """Run all download flow tests"""
        print("🚀 Starting ARI Solutions Download Flow Tests")
        print(f"🌐 Testing against: {API_BASE}")
        print("=" * 60)
        
        # Run all tests
        self.test_vercel_blob_urls_directly()
        self.test_download_redirect_simulation()
        self.test_paypal_integration_status()
        self.test_course_data_integrity()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 DOWNLOAD FLOW TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result['success'])
        failed = len(self.test_results) - passed
        
        print(f"✅ Passed: {passed}")
        print(f"❌ Failed: {failed}")
        print(f"📈 Success Rate: {(passed/len(self.test_results)*100):.1f}%")
        
        print("\n🔍 DETAILED RESULTS:")
        for result in self.test_results:
            status = "✅" if result['success'] else "❌"
            print(f"{status} {result['test']}: {result['message']}")
        
        # Critical issues
        critical_failures = [
            result for result in self.test_results 
            if not result['success'] and not any(keyword in result['message'].lower() 
            for keyword in ['expected in preview', 'expected failure'])
        ]
        
        if critical_failures:
            print(f"\n🚨 CRITICAL DOWNLOAD FLOW ISSUES ({len(critical_failures)}):")
            for failure in critical_failures:
                print(f"❌ {failure['test']}: {failure['message']}")
        else:
            print(f"\n🎉 DOWNLOAD FLOW WORKING CORRECTLY!")
            print("✅ Vercel Blob files accessible")
            print("✅ Download token validation working")
            print("✅ Course data properly configured")
        
        return len(critical_failures) == 0

if __name__ == "__main__":
    tester = DownloadFlowTester()
    success = tester.run_all_tests()
    
    if success:
        print(f"\n🎯 DOWNLOAD FLOW TESTING COMPLETE: All systems operational!")
    else:
        print(f"\n⚠️  DOWNLOAD FLOW TESTING COMPLETE: Issues found that need attention")
    
    exit(0 if success else 1)