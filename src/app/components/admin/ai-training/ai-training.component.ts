// ai-training.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NavigationComponent } from '../navigation/navigation.component';

Chart.register(...registerables);

@Component({
  selector: 'app-ai-training',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './ai-training.component.html',
  styleUrls: ['./ai-training.component.css','../../../../styles.css'],
})
export class AiTrainingComponent implements OnInit, AfterViewInit {
  userInitials = 'SM';
  
  menuItems = [
    { icon: '📊', label: 'Dashboard', route: '/dashboard' },
    { icon: '👥', label: 'User Management', route: '/user-management' },
    { icon: '⚙️', label: 'System Config', route: '/system-config' },
    { icon: '🤖', label: 'AI Training', route: '/ai-training' }
  ];
  
  skills = [
    { name: 'JavaScript', category: 'Programming', recognitionRate: 95 },
    { name: 'Project Management', category: 'Business', recognitionRate: 88 },
    { name: 'Data Analysis', category: 'Data Science', recognitionRate: 90 },
    { name: 'Machine Learning', category: 'AI', recognitionRate: 73, needsReview: true }
  ];

  testCases = {
    total: 60,
    passing: 42,
    failing: 6,
    pending: 12,
    progress: 70
  };

  modelInfo = {
    lastTrained: '3 days ago',
    trainingSamples: 24876
  };

  feedbackData = {
    positiveRate: 87,
    categories: [
      { name: 'Accurate Matches', percentage: 87, color: '#4CAF50' },
      { name: 'Skills Mismatch', percentage: 13, color: '#F44336' },
      { name: 'Experience Level', percentage: 0, color: '#FFC107' },
      { name: 'Other', percentage: 0, color: '#9C27B0' }
    ]
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Empty OnInit - we'll create charts in AfterViewInit
  }

  ngAfterViewInit() {
    // Only initialize charts when in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Add setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        this.initPerformanceChart();
        this.initFeedbackChart();
      });
    }
  }

  initPerformanceChart() {
    const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Accuracy',
            data: [81, 85, 88, 86, 93, 99],
            borderColor: '#4794F8',
            tension: 0.3,
            fill: false
          },
          {
            label: 'Target',
            data: [90, 90, 90, 90, 90, 90],
            borderColor: '#FF6B6B',
            borderDash: [5, 5],
            tension: 0,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Matching Algorithm Performance'
          }
        },
        scales: {
          y: {
            min: 70,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });
  }

  initFeedbackChart() {
    const ctx = document.getElementById('feedbackChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.feedbackData.categories.map(c => c.name),
        datasets: [{
          data: this.feedbackData.categories.map(c => c.percentage),
          backgroundColor: this.feedbackData.categories.map(c => c.color),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}