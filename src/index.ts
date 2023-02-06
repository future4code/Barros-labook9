import { app } from "./app"
import { commentRouter } from "./routes/commentRouter"
import { feedRouter } from "./routes/feedRouter"
import { friendRouter } from "./routes/friendRouter"
import { likepostRouter } from "./routes/likeRouter"
import { postRouter } from "./routes/postRouter"
import { userRouter } from "./routes/userRouter"

// criar usuario
app.use("", userRouter)

// criar post
app.use("", postRouter)

// buscar post de um usuario
app.use("/posts", postRouter)

// criar amizade
app.use("/friend", friendRouter)

// deletar amizade
app.use("/friend", friendRouter)

// buscar post de amigos
app.use("/feed", feedRouter)

// buscar post por type
app.use("", feedRouter)

//curtir post
app.use("",likepostRouter)

// descurtir post
app.use("",likepostRouter)

// adicionar comentarios
app.use("/post", commentRouter)