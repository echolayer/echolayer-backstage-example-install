import { CatalogClient } from "@backstage/catalog-client";
import { createScheduler } from "@echolayer/plugin-backstage-backend";
import { PluginEnvironment } from "../types";

export default async function createPlugin(env: PluginEnvironment) {
    const { logger, scheduler, tokenManager, config } = env;

    const catalogClient = new CatalogClient({
        discoveryApi: env.discovery,
    }) as any;

    await createScheduler({
        logger, scheduler, catalogClient, tokenManager, config
    });
}