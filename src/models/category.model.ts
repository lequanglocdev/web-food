import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Product } from "./product.model";

@Table
export class Category extends Model<Category> {
  @Column({
    allowNull: false,
    unique: true,
    type: DataType.STRING
  })
  name: string
  
  @Column({
    allowNull: false,
    unique: true,
    type: DataType.STRING
  })
  slug: string

  @Column({
    allowNull: true ,
    type: DataType.TEXT
  })
  description: string

  @Column({
    allowNull: true,
    type: DataType.INTEGER
  })
  sortOrder: number

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN
  })
  isActive: boolean
  @HasMany(() => Product)
  products: Product[]
}
