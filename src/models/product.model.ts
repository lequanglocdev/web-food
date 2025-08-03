import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "./category.model";

@Table
export class Product extends Model<Product> {
  @Column({
    allowNull: false,
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
    allowNull: false,
     unique: true,
    type: DataType.INTEGER
  })
  basePrice: number

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  imageUrl: string

  @Column({
    defaultValue: true, 
    type: DataType.BOOLEAN
  })
  isActive: boolean

  @Column({
    defaultValue: false, 
    type: DataType.BOOLEAN
  })
  isFeatured: boolean

  @ForeignKey(() => Category)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  categoryId: number

  @BelongsTo(() => Category)
  category: Category
}
