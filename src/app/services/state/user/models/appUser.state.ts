import { UserResponseDto } from 'src/app/models/dtos/user/userData.model';

export interface AppUserState {
  isLogged: boolean;
  userData: UserResponseDto;
}
