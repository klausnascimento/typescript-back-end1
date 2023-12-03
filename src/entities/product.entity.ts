import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as UUID } from 'uuid';
UUID

@Entity('products')
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  weight: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  constructor(){
    if (!this.id) {
      this.id = UUID()
    }
  }
}
