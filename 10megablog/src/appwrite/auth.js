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
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
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
      throw error;
    }
  }

  // account availability functionality
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite serive :: getCurrentUser :: error', error);
    }

    return null;
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
