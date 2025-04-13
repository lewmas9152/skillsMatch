import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

// Register all Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css', '../../../../styles.css'],
})
export class AnalyticsComponent implements OnInit {
  // Key metrics
  jobPerformance = 87;
  jobPerformanceChange = 5;
  timeToFill = 23;
  timeToFillChange = -2;
  costPerHire = 4250;
  costPerHireChange = -320;
  
  // Hiring funnel data
  funnelData = {
    applied: 542,
    screened: 215,
    interviewed: 87
  };
  
  // Skills gap analysis data
  skillsData = [
    { name: 'React.js', value: 90 },
    { name: 'TypeScript', value: 75 },
    { name: 'JavaScript', value: 95 },
    { name: 'CSS/Sass', value: 80 },
    { name: 'Redux', value: 85 }
  ];
  
  // Applicant sources data
  applicantSourcesData = {
    'Job Boards': 42,
    'Referrals': 28,
    'Company Site': 20,
    'Social Media': 10
  };
  
  // Market trends data
  marketTrendsMonths = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  reactTrend = [65, 59, 80, 70, 85, 90];
  typescriptTrend = [70, 75, 65, 80, 85, 95];
  
  private platformId: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }
  
  ngOnInit(): void {
    // Only initialize charts in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Using setTimeout to ensure the DOM is ready
      setTimeout(() => {
        this.initMarketTrendsChart();
        this.initApplicantSourcesChart();
      }, 0);
    }
  }
  
  initMarketTrendsChart(): void {
    // Safety check to ensure we're in browser environment
    if (!isPlatformBrowser(this.platformId)) return;
    
    const ctx = document.getElementById('marketTrendsChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.marketTrendsMonths,
        datasets: [
          {
            label: 'React Demand',
            data: this.reactTrend,
            borderColor: '#4794F8',
            backgroundColor: 'rgba(71, 148, 248, 0.1)',
            tension: 0.4
          },
          {
            label: 'TypeScript Demand',
            data: this.typescriptTrend,
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  initApplicantSourcesChart(): void {
    // Safety check to ensure we're in browser environment
    if (!isPlatformBrowser(this.platformId)) return;
    
    const ctx = document.getElementById('applicantSourcesChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    const labels = Object.keys(this.applicantSourcesData);
    const data = Object.values(this.applicantSourcesData);
    
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#4794F8',  // Job Boards - blue
            '#4CAF50',  // Referrals - green
            '#FFC107',  // Company Site - yellow
            '#F44336'   // Social Media - red
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}