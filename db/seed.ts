import sampleData from './sample-data';
import { prisma } from './prisma';

const main = async () => {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  console.log('Database seeded successfully');
};

main();
