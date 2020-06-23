import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateNewTableUsers1592880597148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default:'uuid_generate_v4()',
            },
            {
              name: "name",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "password",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "email",
              type: "varchar",
              isNullable: false,
              isUnique: true,
            },
            {
              name: "create_at",
              type: "timestamp",
              default: "now()",
            },
            {
              name: "update_at",
              type: "timestamp",
              default: "now()",
            },
          ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users")
    }
}
