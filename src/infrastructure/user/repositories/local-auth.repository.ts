import { Injectable } from '@/dependencies/injectable'
import { AuthRespository } from '@/domain/user/repositories/auth.repository'
import { Login } from '@/domain/user/entities/login.entity'
import { User } from '@/domain/user/entities/user.entity'
import { Path } from '@/domain/user/entities/path.entity'

@Injectable()
export class LocalAuthRepository implements AuthRespository {
  async paths(): Promise<Path[] | { error: string }> {
    return [
      new Path({
        title: 'Dashboard',
        icon: 'ti ti-layout-dashboard',
        path: '#',
        name: 'Dashboard',
        description: 'Dashboard from local',
        children: [
          {
            name: 'Students',
            description: 'Students from local',
            title: 'Students',
            icon: 'ti ti-school',
            path: '#',
          },

          {
            name: 'Teachers',
            description: 'Teachers from local',
            title: 'Teachers',
            icon: 'ti ti-bell-school',
            path: '#',
          },

          {
            name: 'Classes',
            description: 'Classes from local',
            title: 'Classes',
            icon: 'ti ti-book',
            path: '#',
          },
        ],
      }),
      /*      new Path({
        name: 'Welcome',
        description: 'Welcome for test',
        icon: 'ti ti-location-dollar',
        path: '/welcome',
        title: 'Dollar Location',
      }), */
    ]
  }
  async verify(): Promise<User | { error: string }> {
    return new User({
      id: 1,
      username: 'admin',
      name: 'Admin',
    })
  }
  async login(username: string, password: string): Promise<Login | { error: string }> {
    if (username === 'admin' && password === 'admin123') {
      return new Login({
        token: 'token',
        refreshToken: 'refreshToken',
      })
    }

    return { error: 'Invalid username or password' }
  }
}
