import {MigrationInterface, QueryRunner,TableForeignKey} from "typeorm";

export default class AlterTableAppointmentCreateFKId21593392289119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
      await queryRunner.dropForeignKey('appointments','AppointmentProvider');
    }
}
