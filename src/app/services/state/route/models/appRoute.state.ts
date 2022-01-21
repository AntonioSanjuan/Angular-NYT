import { Data, Params } from "@angular/router";

export interface AppRouteState {
  url: string;
  queryParams: Params;
  params: Params;
}