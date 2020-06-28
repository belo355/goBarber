import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableAppointment1593304660263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropColumn('appointments','user_id');
      queryRunner.addColumn('appointments',new TableColumn({
        name: "provider_id",
        type: "uuid",
        isNullable: true,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropColumn('appointments','provider_id');
      queryRunner.addColumn('appointments',new TableColumn({
        name: "user_id",
        type: "uuid",
        isNullable: true,
      }));
    }

}
