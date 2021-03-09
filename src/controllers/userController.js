import md5 from 'md5'
import userModel from '../models/userModel'

async function getAll(req, res) {
  try {
    const data = await userModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'Deu ERRO' })
  }
}

async function registerUser(req, res) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
      image: filename,
    })

    return res.status(201).send({ msg: 'Tudo certo!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROU: Tudo Cagado', error })
  }
}

export default { getAll, registerUser }
