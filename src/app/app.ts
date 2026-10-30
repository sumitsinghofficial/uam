import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagement } from './components/user-management/user-management';
import { CommonModule } from '@angular/common';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  roles: string[];
  status: 'Active' | 'Pending' | 'Blocked' | 'Deactivated';
  joinedOn: string;
  avatarUrl?: string;
  initials: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, UserManagement],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('uam');

  // Mock data mimicking the provided image
  users = signal<User[]>([
    {
      id: '1',
      name: 'Rahul Sharma',
      email: 'rahul@example.com',
      phone: '+91 98765 43210',
      roles: ['Admin'],
      status: 'Active',
      joinedOn: '12 Aug 2025',
      initials: 'RS'
    },
    {
      id: '2',
      name: 'Priya Patel',
      email: 'priya@example.com',
      phone: '+91 87654 32109',
      roles: ['User'],
      status: 'Active',
      joinedOn: '10 Aug 2025',
      initials: 'PP'
    },
    {
      id: '3',
      name: 'Amit Kumar',
      email: 'amit@example.com',
      phone: '+91 76543 21098',
      roles: ['User', 'Editor'],
      status: 'Active',
      joinedOn: '08 Aug 2025',
      initials: 'AK'
    },
    {
      id: '4',
      name: 'Neha Singh',
      email: 'neha@example.com',
      phone: '+91 65432 10987',
      roles: ['User'],
      status: 'Pending',
      joinedOn: '05 Aug 2025',
      initials: 'NS'
    },
    {
      id: '5',
      name: 'Vikram Yadav',
      email: 'vikram@example.com',
      phone: '+91 54321 09876',
      roles: ['User'],
      status: 'Active',
      joinedOn: '02 Aug 2025',
      initials: 'VY'
    },
    {
      id: '6',
      name: 'Anjali Verma',
      email: 'anjali@example.com',
      phone: '+91 43210 98765',
      roles: ['Editor'],
      status: 'Active',
      joinedOn: '28 Jul 2025',
      initials: 'AV'
    },
    {
      id: '7',
      name: 'Suresh Reddy',
      email: 'suresh@example.com',
      phone: '+91 90123 45678',
      roles: ['User'],
      status: 'Blocked',
      joinedOn: '25 Jul 2025',
      initials: 'SR'
    },
    {
      id: '8',
      name: 'Pooja Gupta',
      email: 'pooja@example.com',
      phone: '+91 81234 56789',
      roles: ['User'],
      status: 'Active',
      joinedOn: '22 Jul 2025',
      initials: 'PG'
    },
    {
      id: '9',
      name: 'Rohit Mehta',
      email: 'rohit@example.com',
      phone: '+91 72345 67890',
      roles: ['Admin'],
      status: 'Active',
      joinedOn: '18 Jul 2025',
      initials: 'RM'
    },
    {
      id: '10',
      name: 'Sneha Iyer',
      email: 'sneha@example.com',
      phone: '+91 61234 56789',
      roles: ['User'],
      status: 'Deactivated',
      joinedOn: '15 Jul 2025',
      initials: 'SI'
    }
  ]);
}
