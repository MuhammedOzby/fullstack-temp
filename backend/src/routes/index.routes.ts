import { Router } from 'express';
import express = require('express');

const IndexRouter = Router();

// Static file response
IndexRouter.get('/', express.static('public/index.html'));

export default IndexRouter;
