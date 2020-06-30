import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AlterTableUserAddColumnAvatar1593483135348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.addColumn('users', new TableColumn({
        name: 'avatar',
        type: 'string',
      }))
    }



    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropColumn('users','avatar');
    }

}
