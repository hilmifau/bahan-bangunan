"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/api/db";

interface DataBahan {
  id: string;
  name: string;
  img: string;
  description: string;
  total: Number;
}

export async function GET() {
  const bahan = await prisma.bahan.findMany();

  return NextResponse.json(
    {
      sucess: true,
      message: "Succes get data bahan",
      data: bahan,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: NextRequest) {
  console.log("methoos===>>>", req);

  const { name, img, description, total } = await req.json();
  console.log("POST request received:", { name, img, description, total });
  await prisma.bahan.create({
    data: {
      name,
      img,
      description,
      total,
    },
  });
  return NextResponse.json(
    {
      sucess: true,
      message: "Succes create bahan",
    },
    {
      status: 200,
    }
  );
}
