import { User, UserRoles } from 'src/domain/model/User/User';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<User>({
  tableName: 'users',
  name: User.name,
  target: User,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: 'enum',
      enum: UserRoles,
    },
    password: {
      type: String,
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
    },
  },
});
