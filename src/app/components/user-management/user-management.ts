import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type UserStatus = 'Active' | 'Pending' | 'Blocked' | 'Deactivated';
type DetailTab = 'Overview' | 'Roles & Permissions' | 'Sessions';

interface UserRecord {
  id: number;
  name: string;
  initials: string;
  email: string;
  phone: string;
  roles: string[];
  status: UserStatus;
  joined: string;
  address: string;
  bio: string;
  verified: boolean;
  phoneVerified: boolean;
  twoFactor: boolean;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-user-management',
  templateUrl: './user-management.html',
})
export class UserManagement {
  users: UserRecord[] = [
    this.makeUser(1, 'Rahul Sharma', 'rahul@example.com', '+91 98765 43210', ['Admin'], 'Active', '12 Aug 2025', 'RS'),
    this.makeUser(2, 'Priya Patel', 'priya@example.com', '+91 87654 32109', ['User'], 'Active', '10 Aug 2025', 'PP'),
    this.makeUser(3, 'Amit Kumar', 'amit@example.com', '+91 76543 21098', ['User', 'Editor'], 'Active', '08 Aug 2025', 'AK'),
    this.makeUser(4, 'Neha Singh', 'neha@example.com', '+91 65432 10987', ['User'], 'Pending', '05 Aug 2025', 'NS'),
    this.makeUser(5, 'Vikram Yadav', 'vikram@example.com', '+91 54321 09876', ['User'], 'Active', '02 Aug 2025', 'VY'),
    this.makeUser(6, 'Anjali Verma', 'anjali@example.com', '+91 43210 98765', ['Editor'], 'Active', '28 Jul 2025', 'AV'),
    this.makeUser(7, 'Suresh Reddy', 'suresh@example.com', '+91 90123 45678', ['User'], 'Blocked', '25 Jul 2025', 'SR'),
    this.makeUser(8, 'Pooja Gupta', 'pooja@example.com', '+91 81234 56789', ['User'], 'Active', '22 Jul 2025', 'PG'),
    this.makeUser(9, 'Rohit Mehta', 'rohit@example.com', '+91 72345 67890', ['Admin'], 'Active', '18 Jul 2025', 'RM'),
    this.makeUser(10, 'Sneha Iyer', 'sneha@example.com', '+91 61234 56789', ['User'], 'Deactivated', '15 Jul 2025', 'SI'),
    this.makeUser(11, 'Rahul Sharma', 'rahul@example.com', '+91 98765 43210', ['Admin'], 'Active', '12 Aug 2025', 'RS'),
    this.makeUser(12, 'Priya Patel', 'priya@example.com', '+91 87654 32109', ['User'], 'Active', '10 Aug 2025', 'PP'),
    this.makeUser(13, 'Amit Kumar', 'amit@example.com', '+91 76543 21098', ['User', 'Editor'], 'Active', '08 Aug 2025', 'AK'),
    this.makeUser(14, 'Neha Singh', 'neha@example.com', '+91 65432 10987', ['User'], 'Pending', '05 Aug 2025', 'NS'),
    this.makeUser(15, 'Vikram Yadav', 'vikram@example.com', '+91 54321 09876', ['User'], 'Active', '02 Aug 2025', 'VY'),
    this.makeUser(16, 'Anjali Verma', 'anjali@example.com', '+91 43210 98765', ['Editor'], 'Active', '28 Jul 2025', 'AV'),
    this.makeUser(17, 'Suresh Reddy', 'suresh@example.com', '+91 90123 45678', ['User'], 'Blocked', '25 Jul 2025', 'SR'),
    this.makeUser(18, 'Pooja Gupta', 'pooja@example.com', '+91 81234 56789', ['User'], 'Active', '22 Jul 2025', 'PG'),
    this.makeUser(19, 'Rohit Mehta', 'rohit@example.com', '+91 72345 67890', ['Admin'], 'Active', '18 Jul 2025', 'RM'),
    this.makeUser(20, 'Sneha Iyer', 'sneha@example.com', '+91 61234 56789', ['User'], 'Deactivated', '15 Jul 2025', 'SI'),
    this.makeUser(21, 'Rahul Sharma', 'rahul@example.com', '+91 98765 43210', ['Admin'], 'Active', '12 Aug 2025', 'RS'),
    this.makeUser(22, 'Priya Patel', 'priya@example.com', '+91 87654 32109', ['User'], 'Active', '10 Aug 2025', 'PP'),
    this.makeUser(23, 'Amit Kumar', 'amit@example.com', '+91 76543 21098', ['User', 'Editor'], 'Active', '08 Aug 2025', 'AK'),
    this.makeUser(24, 'Neha Singh', 'neha@example.com', '+91 65432 10987', ['User'], 'Pending', '05 Aug 2025', 'NS'),
    this.makeUser(25, 'Vikram Yadav', 'vikram@example.com', '+91 54321 09876', ['User'], 'Active', '02 Aug 2025', 'VY'),
    this.makeUser(26, 'Anjali Verma', 'anjali@example.com', '+91 43210 98765', ['Editor'], 'Active', '28 Jul 2025', 'AV'),
    this.makeUser(27, 'Suresh Reddy', 'suresh@example.com', '+91 90123 45678', ['User'], 'Blocked', '25 Jul 2025', 'SR'),
    this.makeUser(28, 'Pooja Gupta', 'pooja@example.com', '+91 81234 56789', ['User'], 'Active', '22 Jul 2025', 'PG'),
    this.makeUser(29, 'Rohit Mehta', 'rohit@example.com', '+91 72345 67890', ['Admin'], 'Active', '18 Jul 2025', 'RM'),
    this.makeUser(30, 'Sneha Iyer', 'sneha@example.com', '+91 61234 56789', ['User'], 'Deactivated', '15 Jul 2025', 'SI'),
	  this.makeUser(31, 'Rahul Sharma', 'rahul@example.com', '+91 98765 43210', ['Admin'], 'Active', '12 Aug 2025', 'RS'),
    this.makeUser(32, 'Priya Patel', 'priya@example.com', '+91 87654 32109', ['User'], 'Active', '10 Aug 2025', 'PP'),
    this.makeUser(33, 'Amit Kumar', 'amit@example.com', '+91 76543 21098', ['User', 'Editor'], 'Active', '08 Aug 2025', 'AK'),
    this.makeUser(34, 'Neha Singh', 'neha@example.com', '+91 65432 10987', ['User'], 'Pending', '05 Aug 2025', 'NS'),
    this.makeUser(35, 'Vikram Yadav', 'vikram@example.com', '+91 54321 09876', ['User'], 'Active', '02 Aug 2025', 'VY'),
    this.makeUser(36, 'Anjali Verma', 'anjali@example.com', '+91 43210 98765', ['Editor'], 'Active', '28 Jul 2025', 'AV'),
    this.makeUser(37, 'Suresh Reddy', 'suresh@example.com', '+91 90123 45678', ['User'], 'Blocked', '25 Jul 2025', 'SR'),
    this.makeUser(38, 'Pooja Gupta', 'pooja@example.com', '+91 81234 56789', ['User'], 'Active', '22 Jul 2025', 'PG'),
    this.makeUser(39, 'Rohit Mehta', 'rohit@example.com', '+91 72345 67890', ['Admin'], 'Active', '18 Jul 2025', 'RM'),
    this.makeUser(40, 'Sneha Iyer', 'sneha@example.com', '+91 61234 56789', ['User'], 'Deactivated', '15 Jul 2025', 'SI'),
    this.makeUser(41, 'Rahul Sharma', 'rahul@example.com', '+91 98765 43210', ['Admin'], 'Active', '12 Aug 2025', 'RS'),
    this.makeUser(42, 'Priya Patel', 'priya@example.com', '+91 87654 32109', ['User'], 'Active', '10 Aug 2025', 'PP'),
    this.makeUser(43, 'Amit Kumar', 'amit@example.com', '+91 76543 21098', ['User', 'Editor'], 'Active', '08 Aug 2025', 'AK'),
    this.makeUser(44, 'Neha Singh', 'neha@example.com', '+91 65432 10987', ['User'], 'Pending', '05 Aug 2025', 'NS'),
    this.makeUser(45, 'Vikram Yadav', 'vikram@example.com', '+91 54321 09876', ['User'], 'Active', '02 Aug 2025', 'VY'),
    this.makeUser(46, 'Anjali Verma', 'anjali@example.com', '+91 43210 98765', ['Editor'], 'Active', '28 Jul 2025', 'AV'),
    this.makeUser(47, 'Suresh Reddy', 'suresh@example.com', '+91 90123 45678', ['User'], 'Blocked', '25 Jul 2025', 'SR'),
    this.makeUser(48, 'Pooja Gupta', 'pooja@example.com', '+91 81234 56789', ['User'], 'Active', '22 Jul 2025', 'PG'),
    this.makeUser(49, 'Rohit Mehta', 'rohit@example.com', '+91 72345 67890', ['Admin'], 'Active', '18 Jul 2025', 'RM'),
    this.makeUser(50, 'Sneha Iyer', 'sneha@example.com', '+91 61234 56789', ['User'], 'Deactivated', '15 Jul 2025', 'SI'),
	  this.makeUser(51, 'Rahul Sharma', 'rahul@example.com', '+91 98765 43210', ['Admin'], 'Active', '12 Aug 2025', 'RS'),
    this.makeUser(52, 'Priya Patel', 'priya@example.com', '+91 87654 32109', ['User'], 'Active', '10 Aug 2025', 'PP'),
    this.makeUser(53, 'Amit Kumar', 'amit@example.com', '+91 76543 21098', ['User', 'Editor'], 'Active', '08 Aug 2025', 'AK'),
    this.makeUser(54, 'Neha Singh', 'neha@example.com', '+91 65432 10987', ['User'], 'Pending', '05 Aug 2025', 'NS'),
    this.makeUser(55, 'Vikram Yadav', 'vikram@example.com', '+91 54321 09876', ['User'], 'Active', '02 Aug 2025', 'VY'),
    this.makeUser(56, 'Anjali Verma', 'anjali@example.com', '+91 43210 98765', ['Editor'], 'Active', '28 Jul 2025', 'AV'),
    this.makeUser(57, 'Suresh Reddy', 'suresh@example.com', '+91 90123 45678', ['User'], 'Blocked', '25 Jul 2025', 'SR'),
    this.makeUser(58, 'Pooja Gupta', 'pooja@example.com', '+91 81234 56789', ['User'], 'Active', '22 Jul 2025', 'PG'),
    this.makeUser(59, 'Rohit Mehta', 'rohit@example.com', '+91 72345 67890', ['Admin'], 'Active', '18 Jul 2025', 'RM'),
    this.makeUser(60, 'Sneha Iyer', 'sneha@example.com', '+91 61234 56789', ['User'], 'Deactivated', '15 Jul 2025', 'SI'),
  ];

  searchQuery = '';
  roleFilter = 'All Roles';
  statusFilter = 'All Statuses';
  activeSection = 'Dashboard';
  activeTab: DetailTab = 'Overview';
  selectedUser: UserRecord | null = this.users[0];
  selectedIds = new Set<number>();
  rowMenuId: number | null = null;
  isDialogOpen = false;
  editingUserId: number | null = null;
  toastMessage = '';
  newName = '';
  newEmail = '';
  newPhone = '';
  newRole = 'User';
  dateFrom = '';
  dateTo = '';

  get filteredUsers(): UserRecord[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.users.filter((user) => {
      const matchesQuery = !query || [user.name, user.email, user.phone].some((value) =>
        value.toLowerCase().includes(query),
      );
      const matchesRole = this.roleFilter === 'All Roles' || user.roles.includes(this.roleFilter);
      const matchesStatus = this.statusFilter === 'All Statuses' || user.status === this.statusFilter;
      const joined = new Date(user.joined);
      const matchesFrom = !this.dateFrom || joined >= new Date(this.dateFrom);
      const matchesTo = !this.dateTo || joined <= new Date(`${this.dateTo}T23:59:59`);
      return matchesQuery && matchesRole && matchesStatus && matchesFrom && matchesTo;
    });
  }

  get allVisibleSelected(): boolean {
    return this.filteredUsers.length > 0 && this.filteredUsers.every((user) => this.selectedIds.has(user.id));
  }

  get activeCount(): number {
    return this.users.filter((user) => user.status === 'Active').length;
  }

  get blockedCount(): number {
    return this.users.filter((user) => user.status === 'Blocked').length;
  }

  get pendingCount(): number {
    return this.users.filter((user) => user.status === 'Pending').length;
  }

  setActiveUser(user: UserRecord): void {
    this.selectedUser = user;
    this.activeTab = 'Overview';
    this.rowMenuId = null;
  }

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedIds = checked
      ? new Set([...this.selectedIds, ...this.filteredUsers.map((user) => user.id)])
      : new Set([...this.selectedIds].filter((id) => !this.filteredUsers.some((user) => user.id === id)));
  }

  toggleSelection(user: UserRecord, event: Event): void {
    const selected = new Set(this.selectedIds);
    if ((event.target as HTMLInputElement).checked) selected.add(user.id);
    else selected.delete(user.id);
    this.selectedIds = selected;
  }

  clearSelection(): void {
    this.selectedIds = new Set();
  }

  openAddUser(): void {
    this.editingUserId = null;
    this.newName = '';
    this.newEmail = '';
    this.newPhone = '';
    this.newRole = 'User';
    this.isDialogOpen = true;
  }

  openEditUser(user: UserRecord): void {
    this.setActiveUser(user);
    this.editingUserId = user.id;
    this.newName = user.name;
    this.newEmail = user.email;
    this.newPhone = user.phone;
    this.newRole = user.roles[0] ?? 'User';
    this.isDialogOpen = true;
  }

  saveUser(): void {
    const name = this.newName.trim();
    const email = this.newEmail.trim();
    if (!name || !email) return;

    if (this.editingUserId !== null) {
      const existing = this.users.find((user) => user.id === this.editingUserId);
      if (existing) {
        existing.name = name;
        existing.initials = this.initialsFor(name);
        existing.email = email;
        existing.phone = this.newPhone.trim() || existing.phone;
        existing.roles = [this.newRole];
        this.selectedUser = existing;
      }
      this.showToast('User details updated');
    } else {
      const created = this.makeUser(
        Math.max(0, ...this.users.map((user) => user.id)) + 1,
        name,
        email,
        this.newPhone.trim() || '—',
        [this.newRole],
        'Pending',
        new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()),
        this.initialsFor(name),
      );
      this.users = [created, ...this.users];
      this.setActiveUser(created);
      this.showToast('User added to the list');
    }
    this.closeDialog();
  }

  changeStatus(user: UserRecord, status: UserStatus): void {
    user.status = status;
    this.showToast(`${user.name} marked ${status.toLowerCase()}`);
    this.rowMenuId = null;
  }

  deleteUser(user: UserRecord): void {
    if (!window.confirm(`Delete ${user.name} from this demo list?`)) return;
    this.users = this.users.filter((record) => record.id !== user.id);
    this.selectedIds.delete(user.id);
    this.selectedUser = this.users[0] ?? null;
    this.showToast('User removed from the demo list');
    this.rowMenuId = null;
  }

  deleteSelected(): void {
    if (!this.selectedIds.size) return;
    if (!window.confirm(`Remove ${this.selectedIds.size} selected users from this demo list?`)) return;
    this.users = this.users.filter((user) => !this.selectedIds.has(user.id));
    this.selectedIds = new Set();
    if (this.selectedUser && !this.users.some((user) => user.id === this.selectedUser?.id)) {
      this.selectedUser = this.users[0] ?? null;
    }
    this.showToast('Selected users removed from the demo list');
  }

  exportUsers(): void {
    const rows = this.filteredUsers.map((user) =>
      [user.name, user.email, user.phone, user.roles.join('; '), user.status, user.joined]
        .map((value) => `"${value.replaceAll('"', '""')}"`)
        .join(','),
    );
    const csv = ['Name,Email,Phone,Roles,Status,Joined on', ...rows].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'users.csv';
    link.click();
    URL.revokeObjectURL(url);
    this.showToast('User list exported');
  }

  importUsers(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const lines = String(reader.result ?? '').split(/\r?\n/).filter(Boolean);
      const imported = lines.slice(1).flatMap((line, index) => {
        const [name, email, phone, roles, status, joined] = this.parseCsvLine(line);
        if (!name || !email) return [];
        const validStatuses: UserStatus[] = ['Active', 'Pending', 'Blocked', 'Deactivated'];
        const parsedStatus = validStatuses.find((item) => item.toLowerCase() === status?.toLowerCase()) ?? 'Pending';
        return [this.makeUser(
          Date.now() + index,
          name,
          email,
          phone || '—',
          (roles || 'User').split(/[;|]/).map((role) => role.trim()).filter(Boolean),
          parsedStatus,
          joined || '—',
          this.initialsFor(name),
        )];
      });
      if (imported.length) {
        this.users = [...imported, ...this.users];
        this.setActiveUser(imported[0]);
        this.showToast(`${imported.length} users imported`);
      } else {
        this.showToast('No valid users found. Use CSV columns: Name, Email, Phone, Roles, Status, Joined on.');
      }
      input.value = '';
    };
    reader.readAsText(file);
  }

  sendNotification(): void {
    this.showToast('Notifications need a connected service to send.');
  }

  resetPassword(): void {
    this.showToast('Password reset needs a connected identity service.');
  }

  changeTab(tab: DetailTab): void {
    this.activeTab = tab;
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }

  showToast(message: string): void {
    this.toastMessage = message;
    window.setTimeout(() => {
      if (this.toastMessage === message) this.toastMessage = '';
    }, 3200);
  }

  private makeUser(
    id: number,
    name: string,
    email: string,
    phone: string,
    roles: string[],
    status: UserStatus,
    joined: string,
    initials: string,
  ): UserRecord {
    return {
      id, name, email, phone, roles, status, joined, initials,
      address: '123, Green Park, New Delhi, India',
      bio: 'Software Engineer',
      verified: status === 'Active',
      phoneVerified: status === 'Active',
      twoFactor: false,
    };
  }

  private initialsFor(name: string): string {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0].toUpperCase()).join('');
  }

  private parseCsvLine(line: string): string[] {
    return line.match(/("([^"]|"")*"|[^,]*)(,|$)/g)?.map((part) =>
      part.replace(/,$/, '').replace(/^"|"$/g, '').replaceAll('""', '"'),
    ) ?? [];
  }
}
