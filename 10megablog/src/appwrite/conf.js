import config from '../config/config';
import { Client, Databases, Storage, Query, ID } from 'appwrite';

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // API Endpoint
      .setProject(config.appwriteProjectId); // project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // create post functionality
  async createPost({ title, slug, featuredImage, content, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, featuredImage, content, status, userId }
      );
    } catch (error) {
      console.log(`Error :: createpost :: ${error}`);
    }
  }

  // update post functionality
  async updatePost(slug, { title, featuredImage, content, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, featuredImage, content, status }
      );
    } catch (error) {
      console.log(`Error :: updatePost :: ${error}`);
    }
  }

  // delete post functionality
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log(`Error :: deletePost :: ${error}`);
      return false;
    }
  }

  // get one post functionality
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Error :: getPost :: ${error}`);
      return false;
    }
  }

  // get all posts functionality
  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(`Error :: getPosts :: ${error}`);
      return false;
    }
  }

  // --------- storage functionalities
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(`Error :: uploadFile :: ${error}`);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(`Error :: deleteFile :: ${error}`);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
