import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTweetHashtagImageTables1666545032313 implements MigrationInterface {
    name = 'updateTweetHashtagImageTables1666545032313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS public.tweets_hashtags
        (
            tweets_id uuid NOT NULL,
            hashtags_id uuid NOT NULL,
            CONSTRAINT "PK_03d96d82292297f0a6581cad9d7" PRIMARY KEY (tweets_id, hashtags_id)
        )`)
        await queryRunner.query(`ALTER TABLE "hashtags" DROP COLUMN "tweet_id"`);
        await queryRunner.query(`ALTER TABLE "tweets" DROP CONSTRAINT "FK_0a23c50228c2db732e3214682b0"`);
        await queryRunner.query(`ALTER TABLE "tweets" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tweets" ADD CONSTRAINT "FK_0a23c50228c2db732e3214682b0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE INDEX "IDX_0a5ddcf84c586d7f479d39923d" ON "tweets_hashtags" ("tweets_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_23c88e014fb2f4946097a065c9" ON "tweets_hashtags" ("hashtags_id") `);
        await queryRunner.query(`ALTER TABLE "tweets_hashtags" ADD CONSTRAINT "FK_0a5ddcf84c586d7f479d39923d1" FOREIGN KEY ("tweets_id") REFERENCES "tweets"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tweets_hashtags" ADD CONSTRAINT "FK_23c88e014fb2f4946097a065c94" FOREIGN KEY ("hashtags_id") REFERENCES "hashtags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweets" DROP CONSTRAINT "FK_0a23c50228c2db732e3214682b0"`);
        await queryRunner.query(`ALTER TABLE "tweets" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tweets" ADD CONSTRAINT "FK_0a23c50228c2db732e3214682b0" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hashtags" ADD "tweet_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tweets_hashtags" DROP CONSTRAINT "FK_23c88e014fb2f4946097a065c94"`);
        await queryRunner.query(`ALTER TABLE "tweets_hashtags" DROP CONSTRAINT "FK_0a5ddcf84c586d7f479d39923d1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_23c88e014fb2f4946097a065c9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0a5ddcf84c586d7f479d39923d"`);
        
    }

}
