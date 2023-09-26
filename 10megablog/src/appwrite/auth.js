/* eslint-disable no-useless-catch */
import { Client, Account, ID } from 'appwrite';
import config from '../config/config';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // API Endpoint
      .setProject(config.appwriteProjectId); // project ID

    this.account = new Account(this.client);
  }

  // sign-up functionality
  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );

      if (userAccount) {
        return this.login(email, password); // logging in user directly
      } else {
        console.log('Error occured in createAccount()');
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // login functionality
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log('Error occured in login()');
      throw error;
    }
  }

  // account availability functionality
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Error occured in fetching current user status');
      throw error;
    }
  }

  // logout functionality
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log('Error occured in logout()');
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
