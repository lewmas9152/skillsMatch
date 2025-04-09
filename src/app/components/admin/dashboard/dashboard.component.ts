// dashboard.component.ts
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

// Register all Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  @ViewChild('userStatsChart') userStatsChart!: ElementRef;
  chart: any;
  
  userName: string = 'Samwel';
  systemHealth = {
    serverStatus: 'online',
    apiResponseTime: '145ms',
    errorRate: '0.03%'
  };
  
  platformActivity = {
    activeJobs: 1204,
    newApplications: 876,
    interviews: 1204,
    hires: 42
  };
  
  aiPerformance = {
    matchAccuracy: 87,
    skillsRecognized: 958,
    maxSkills: 1000,
    feedbackRating: 47,
    maxRating: 50
  };

  // Dummy data for the chart
  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Job Seekers',
        data: [400, 450, 550, 500, 650, 700, 780, 820, 900],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Employers',
        data: [300, 320, 380, 400, 450, 480, 500, 550, 600],
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46, 204, 113, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Recruiters',
        data: [150, 170, 200, 220, 250, 270, 300, 320, 350],
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231, 76, 60, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Only create chart in browser environment
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.createChart();
      }, 1000);
    }
  }

  createChart(): void {
    if (!this.userStatsChart) {
      return;
    }
    
    this.chart = new Chart(this.userStatsChart.nativeElement, {
      type: 'line',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              usePointStyle: true,
              padding: 15
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            border: {
              display: false
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
}