import crypto from "crypto";
import express from "express";
import cors from "cors";
import { sign, verify } from 'jsonwebtoken'

const companiesList: Array<{
  id: string;
  name: string;
}> = [
    {
      id: crypto.randomUUID(),
      name: "Company 1",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 2",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 3",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 4",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 5",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 6",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 7",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 8",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 9",
    },
    {
      id: crypto.randomUUID(),
      name: "Company 10",
    },
  ];

const jwtSecret = '@#$@%@%@!@#!#%AD'

const app = express();
app.use(express.json());
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

app.get("/companies", async (req, res) => {
  const { page, limit } = req.query;

  let filteredCompanies = companiesList;

  if (page && limit) {
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = Number(page) * Number(limit);
    filteredCompanies = companiesList.slice(startIndex, endIndex);
  }

  await delay(2000);
  res.json(filteredCompanies);
});

app.post("/companies", (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: "Name is required" });
  if (name.length < 3)
    return res.status(400).json({ error: "Name is too short" });

  const newCompany = {
    id: crypto.randomUUID(),
    name,
  };

  companiesList.push(newCompany);

  res.json(newCompany);
});

app.put("/companies/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const companyIndex = companiesList.findIndex((company) => company.id === id);

  if (companyIndex < 0)
    return res.status(404).json({ error: "Company not found" });

  if (!name) return res.status(400).json({ error: "Name is required" });
  if (name.length < 3)
    return res.status(400).json({ error: "Name is too short" });

  companiesList[companyIndex].name = name;

  res.json(companiesList[companyIndex]);
});

app.delete("/companies/:id", (req, res) => {
  const { id } = req.params;

  const companyIndex = companiesList.findIndex((company) => company.id === id);

  if (companyIndex < 0)
    return res.status(404).json({ error: "Company not found" });

  companiesList.splice(companyIndex, 1);

  res.status(204).send();
});

app.post("/login", (req, res) => {
  const savedEmail = 'email@email.com'
  const savedPassword = '123456'

  const { email, password } = req.body;

  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  const validEmail = emailRegex.test(email)
  console.log({ email, validEmail })


  if (!email) return res.status(400).json({ error: "Email is required" });
  if (!password) return res.status(400).json({ error: "Password is required" });
  if (!validEmail) return res.status(400).json({ error: "Invalid email" });
  if (savedPassword !== password) return res.status(401).json({ error: "Invalid credentials" });
  if (savedEmail !== email) return res.status(401).json({ error: "Invalid credentials" });

  const token = sign({ email }, jwtSecret)

  res.json({ token })
})

app.get("/me", (req, res) => {
  const { authorization } = req.headers

  if (!authorization) return res.status(401).json({ error: "Invalid credentials" });

  const token = authorization.replace('Bearer ', '')

  try {
    const decoded = verify(token, jwtSecret)
    console.log({ decoded })
    res.json({
      email: decoded.email
    })
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
  }
})

app.use(cors());
app.listen(3002, () => console.log("Server is running"));
