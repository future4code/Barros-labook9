import { app } from "./app"
import { feedRouter } from "./routes/feedRouter"
import { friendRouter } from "./routes/friendRouter"
import { postRouter } from "./routes/postRouter"
import { userRouter } from "./routes/userRouter"


app.use("", userRouter)

app.use("", postRouter)

app.use("/posts", postRouter)

app.use("/friend", friendRouter)

app.use("/friend", friendRouter)

app.use("/feed", feedRouter)


/**************************** TYPES ******************************/

type authenticationData = {
   id: string
}


enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

type post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}
