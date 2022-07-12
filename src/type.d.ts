import { Book, Author, User } from "@prisma/client";
import { BookmarksAddResponse } from "@slack/web-api";

type Book = Book;
type Author = Author;
type User = User;

type BookWithAuthor = Book & { author: Author };
