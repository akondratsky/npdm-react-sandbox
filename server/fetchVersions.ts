import {
  getClient as getConfigCatClient,
  PollingMode,
  type SettingValue
} from 'configcat-node';

const configCatClient = getConfigCatClient(process.env.CONFIG_CAT_KEY as string,
  PollingMode.ManualPoll,
);


export const fetchVersions = async () => {
  await configCatClient.forceRefreshAsync();
  const settings = await configCatClient.getAllValuesAsync();
  return settings.reduce((acc, { settingKey, settingValue }) => {
    acc[settingKey] = settingValue;
    return acc;
  }, {} as Record<string, SettingValue>)
};
