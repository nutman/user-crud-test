import {environment} from '@environments/environment';

export class ApiConfig {
  private static readonly base = environment.baseURL;

  public static readonly users = `${ApiConfig.base}/users`;

}
