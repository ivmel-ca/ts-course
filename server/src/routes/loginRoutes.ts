import { Request, Response, Router, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
};

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="post" >
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" name="email"/>
      </div>
      <div>
        <label for="pass">Password</label>
        <input id="pass" type="password" name="password"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "ivmel.dev@gmail.com") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/", (req: RequestWithBody, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <p>You are logged in</p>
      <a href="/logout">Logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <p>You are not logged in</p>
      <a href="/login">Login</a>
    </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user!");
});

export { router };
