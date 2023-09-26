import express from 'express'
import { prisma } from './backend/src/repositories.js';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/usuarios', async (req, res) => {
	const usuarios = await prisma.usuario.findMany({
		where: {
			deleted: 0
		}
	})
	return res.status(200).json(usuarios)
})

app.get('/usuarios/:id', async (req, res) => {
	const id = req.params.id

	if (!id) return res.status(400).json("O id é obrigatório!")
	const result = await prisma.usuario.findFirst({
		where: {
			id: Number(id)
		}
	})
	return res.status(200).json(result);
})



app.post("/usuarios", async (req, res) => {
	const { name, sobrenome, idade, endereco, cidade, pais } = req.body
	if (!name) return res.status(400).json("O nome é obrigatorio!")
	if (!sobrenome) return res.status(400).json("O sobrenome é obrigatorio!")
	if (!idade) return res.status(400).json("A idade é obrigatoria!")
	if (!endereco) return res.status(400).json("O endereço é obrigatorio!")
	if (!cidade) return res.status(400).json("A cidade é obrigatoria!")
	if (!pais) return res.status(400).json("O país é obrigatorio!")

	const usuario = await prisma.usuario.create({
		data: {
			cidade,
			endereco,
			idade: Number(idade),
			pais,
			primeiro_nome: name,
			sobrenome,
		}
	})

	return res.status(201).json(usuario)
})

app.put("/usuarios/:id", async (req, res) => {
	const id = req.params.id;
	const { name } = req.body

	if (!id) return res.status(400).json("O id é obrigatorio!")
	const usuario = await prisma.usuario.findFirst({
		where: {
			id: Number(id)
		}
	})

	if (!usuario) return res.status(400).json("O usuario não existe")
	const updatedUsuario = await prisma.usuario.update({
		where: {
			id: usuario.id
		}, data: {
			...usuario,
			primeiro_nome: name,
		}
	})
	return res.status(200).json(updatedUsuario)
})

app.delete("/usuarios/:id", async (req, res) => {
	const id = req.params.id;
	if (!id) return res.status(400).json("o id é obrigatório")

	const usuario = await prisma.usuario.findFirst({
		where: {
			id: Number(id)
		}
	})

	if (!usuario) return res.status(400).json("O usuario não existe")

	await prisma.usuario.update({
		where: {
			id: Number(id)
		},
		data: {
			deleted: 1
		}
	})
	return res.status(400).json(true)
})

app.listen(port, () => {
	console.log(`server is running on ${port}`);
})