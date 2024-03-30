import { v4 as uuid } from 'uuid';
import { EditUserDTO } from './dtos';

export enum UserRoles {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
}

export class User {
  id: string;
  name: string;
  email: string;
  role: UserRoles;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(name: string, email: string, password: string, role: UserRoles) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = null;
  }

  edit(editUserDTO: EditUserDTO) {
    this.name = editUserDTO.name ?? this.name;
    this.email = editUserDTO.email ?? this.email;
  }
}
