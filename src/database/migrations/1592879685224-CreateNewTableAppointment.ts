import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateNewTableAppointment1592879685224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "appointments",
          columns: [
            {
              name: "id",
              type: "varchar",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()",
            },
            {
              name: "date",
              type: 'timestamp with time zone',
              isNullable: false,
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
            {
              name: "provider_id",
              type: "uuid",
              isNullable: true,
            }
          ]
        }));

        await queryRunner.createForeignKey('appointments', new TableForeignKey({
          name: 'AppointmentProvider',
            columnNames: ['provider_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments');
    }

}
