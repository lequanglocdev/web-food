import { Column, DataType, Model, Table } from "sequelize-typescript";

export enum ProductVariantType {
  THIN = 'Mỏng',
  NORMAL = 'Bình thường'

}

export enum ProductVariantSize {
  THIN = 'Mỏng',
  NORMAL = 'Bình thường'

}
@Table
export class ProductVariants extends Model<ProductVariants> {
  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name: string

  @Column({
    allowNull: false,
    type: DataType.ENUM(...Object.values(ProductVariantSize))
  })
  size: ProductVariantSize

  @Column({
    allowNull: false,
    type: DataType.ENUM(...Object.values(ProductVariantType))
  })
  type: ProductVariantType 

  @Column({
    defaultValue: 0, 
    type: DataType.INTEGER
  })
  modifiedPrice: number

  @Column({
    defaultValue: true, 
    type: DataType.BOOLEAN
  })
  isActive: boolean

  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  productId: number
}
