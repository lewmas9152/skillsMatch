// interviews.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";


interface Interview {
  id: number;
  candidateName: string;
  timeSlot: {
    start: Date;
    end: Date;
  };
  interviewType: 'Technical Interview' | 'Coding Challenge' | 'Final Round' | 'Initial Screening';
  color: string;
}

@Component({
  selector: 'app-interviews',
  imports: [CommonModule, NavigationComponent],
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css', '../employer.component.css'],
})
export class InterviewsComponent implements OnInit {
  viewMode: 'calendar' | 'list' = 'calendar';
  interviews: Interview[] = [];
  weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  timeSlots: string[] = [];
  startHour = 9; // 9 AM
  endHour = 17; // 5 PM

  constructor() { 
    // Generate time slots from 9 AM to 5 PM
    for (let hour = this.startHour; hour < this.endHour; hour++) {
      this.timeSlots.push(`${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`);
    }
  }

  ngOnInit(): void {
    // Sample data - in a real app, this would come from a service
    const currentDate = new Date();
    const monday = this.getMonday(currentDate);
    
    this.interviews = [
      {
        id: 1,
        candidateName: 'Sarah Johnson',
        timeSlot: {
          start: this.addDaysAndHours(monday, 0, 9, 30),
          end: this.addDaysAndHours(monday, 0, 10, 30)
        },
        interviewType: 'Technical Interview',
        color: '#a8c7fa' // Light blue
      },
      {
        id: 2,
        candidateName: 'Michael Chen',
        timeSlot: {
          start: this.addDaysAndHours(monday, 1, 10, 45),
          end: this.addDaysAndHours(monday, 1, 11, 45)
        },
        interviewType: 'Coding Challenge',
        color: '#f6d285' // Light orange/yellow
      },
      {
        id: 3,
        candidateName: 'David Rodriguez',
        timeSlot: {
          start: this.addDaysAndHours(monday, 4, 12, 30),
          end: this.addDaysAndHours(monday, 4, 13, 30)
        },
        interviewType: 'Final Round',
        color: '#a8e6a8' // Light green
      },
      {
        id: 4,
        candidateName: 'David Mugo',
        timeSlot: {
          start: this.addDaysAndHours(monday, 2, 14, 15),
          end: this.addDaysAndHours(monday, 2, 15, 15)
        },
        interviewType: 'Technical Interview',
        color: '#a8c7fa' // Light blue
      },
      {
        id: 5,
        candidateName: 'David Rodriguez',
        timeSlot: {
          start: this.addDaysAndHours(monday, 3, 12, 30),
          end: this.addDaysAndHours(monday, 3, 13, 30)
        },
        interviewType: 'Final Round',
        color: '#a8e6a8' // Light green
      }
    ];
  }

  // Helper method to get Monday of the current week
  getMonday(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(date.setDate(diff));
  }

  // Helper method to add days and hours to a date
  addDaysAndHours(date: Date, days: number, hours: number, minutes: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    newDate.setHours(hours, minutes, 0);
    return newDate;
  }

  toggleView(view: 'calendar' | 'list'): void {
    this.viewMode = view;
  }

  getInterviewsForTimeAndDay(hour: number, day: number): Interview[] {
    const startOfHour = new Date();
    startOfHour.setHours(hour, 0, 0, 0);
    
    const endOfHour = new Date();
    endOfHour.setHours(hour + 1, 0, 0, 0);
    
    return this.interviews.filter(interview => {
      const interviewDay = interview.timeSlot.start.getDay();
      // Adjust day to match our array (0 = Monday, 6 = Sunday)
      const adjustedDay = interviewDay === 0 ? 6 : interviewDay - 1;
      
      if (adjustedDay !== day) return false;
      
      const interviewStartHour = interview.timeSlot.start.getHours();
      const interviewEndHour = interview.timeSlot.end.getHours();
      
      // Check if the interview starts or spans this hour
      return (interviewStartHour === hour) || 
             (interviewStartHour < hour && interviewEndHour > hour);
    });
  }

  formatTime(date: Date): string {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // Hour '0' should be '12'
    
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    
    return `${hours}:${minutesStr} ${ampm}`;
  }

  formatTimeRange(interview: Interview): string {
    return `${this.formatTime(interview.timeSlot.start)} - ${this.formatTime(interview.timeSlot.end)}`;
  }

  openScheduleInterviewDialog(): void {
    // This would open a dialog to schedule a new interview
    console.log('Opening schedule interview dialog');
  }

  openFilterDialog(): void {
    // This would open a dialog with filter options
    console.log('Opening filter dialog');
  }
}