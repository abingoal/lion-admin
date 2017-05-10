import Mock from 'mockjs'

const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    nickname: '管理员',
    avatar: '../../../static/avatar/avatar.png'
  }
]

const Users = []
for (let i = 0; i < 100; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    address: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birthday: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export { LoginUsers, Users }

