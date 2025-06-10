import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
  private readonly TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
  private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendEmail(formData: {
    name: string;
    email: string;
    message: string;
  }): Promise<any> {
    try {
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Prime Link Services',
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
} 