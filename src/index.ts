import { app } from "./app"
import { commentRouter } from "./routes/commentRouter"
import { feedRouter } from "./routes/feedRouter"
import { friendRouter } from "./routes/friendRouter"
import { likepostRouter } from "./routes/likeRouter"
import { postRouter } from "./routes/postRouter"
import { userRouter } from "./routes/userRouter"


app.use("", userRouter)

app.use("", postRouter)

app.use("/posts", postRouter)

app.use("/friend", friendRouter)

app.use("/friend", friendRouter)

app.use("/feed", feedRouter)

app.use("", feedRouter)

app.use("",likepostRouter)

app.use("",likepostRouter)

app.use("/post", commentRouter)