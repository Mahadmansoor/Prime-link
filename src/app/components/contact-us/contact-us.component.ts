import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isLoading = false;
  showSuccess = false;
  showError = false;
  errorMessage = '';

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showError = true;
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.isLoading = true;
    this.showError = false;
    this.showSuccess = false;

    try {
      await this.emailService.sendEmail(this.formData);
      this.showSuccess = true;
      this.formData = { name: '', email: '', message: '' };
    } catch (error) {
      this.showError = true;
      this.errorMessage = 'Failed to send message. Please try again later.';
    } finally {
      this.isLoading = false;
    }
  }
} 