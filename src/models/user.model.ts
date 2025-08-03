import { Column, DataType, Model, Table } from "sequelize-typescript";

export enum UserRoles {
  AMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER'
}

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
    unique: true,
    type: DataType.STRING
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  password: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name: string;

  @Column({
    allowNull: true,
    type: DataType.STRING
  })
  avartar: string;

  @Column({
    allowNull: true,
    type: DataType.STRING
  })
  phone: string;

  @Column({
    allowNull: false,
    defaultValue: UserRoles.CUSTOMER,
    type: DataType.ENUM(...Object.values(UserRoles))
  })
  role: string;

   @Column({
    allowNull: true,
    type: DataType.STRING
  })
  provider: string;
}
