import { Injectable } from "@angular/core";
import { RouterStateSnapshot } from "@angular/router";
import { AppRouteState } from "./models/appRoute.state";
import { RouterStateSerializer } from "@ngrx/router-store";

@Injectable()
export class CustomSerializer implements RouterStateSerializer<AppRouteState> {
  serialize(routerState: RouterStateSnapshot): AppRouteState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { 
      url: url,
      params: params, 
      queryParams: queryParams 
    } as AppRouteState;
  }
}