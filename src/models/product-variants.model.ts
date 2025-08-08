import { Product } from './product.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

export enum ProductVariantType {
  THIN = 'Mỏng',
  NORMAL = 'Bình thường'

}

export enum ProductVariantSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'

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

  @ForeignKey(() => Product)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  productId: number
  @BelongsTo(() => Product)
  product: Product
}
