import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const kits = [
  {
    id: 1,
    title: 'Watercolor Landscapes',
    description: 'Create stunning landscape paintings with professional watercolor techniques',
    difficulty: 'Beginner',
    time: '2-3 hours',
    image: '/watercolor-landscape.png',
    price: '$29',
    featured: true,
  },
  {
    id: 2,
    title: 'Macramé Wall Hanging',
    description: 'Learn the art of macramé and create a beautiful bohemian wall decoration',
    difficulty: 'Intermediate',
    time: '3-4 hours',
    image: '/macrame-wall-hanging.png',
    price: '$34',
  },
  {
    id: 3,
    title: 'Ceramic Pottery Bowl',
    description: 'Hand-build and paint your own ceramic bowl using traditional techniques',
    difficulty: 'Beginner',
    time: '4-5 hours',
    image: '/ceramic-pottery-bowl.png',
    price: '$39',
  },
  {
    id: 4,
    title: 'Embroidery Hoop Art',
    description:
      'Create intricate floral embroidery art perfect for home decoration using stiching techniques',
    difficulty: 'Intermediate',
    time: '2-3 hours',
    image: '/hoop-art.png',
    price: '$24',
  },
];

export function MonthlyKitsSection() {
  return (
    <section className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-foreground'>This Month&apos;s Kits</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Carefully curated projects to spark your creativity
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {kits.map((kit) => (
            <Card
              key={kit.id}
              className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl'>
              <CardHeader className='pb-4'>
                <div className='relative'>
                  <div className='bg-gradient-to-br from-brand-coral/10 to-brand-mint/10 rounded-2xl flex items-center justify-center mb-4'>
                    <img
                      src={kit.image}
                      alt={kit.title}
                      className='w-full h-full object-contain rounded-2xl'
                    />
                  </div>
                  {kit.featured && (
                    <Badge className='absolute -top-2 -right-2 bg-brand-coral text-white'>
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className='text-lg'>{kit.title}</CardTitle>
                <CardDescription className='text-sm'>{kit.description}</CardDescription>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center text-sm'>
                    <div className='flex items-center space-x-2'>
                      <Badge className='bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs'>
                        {kit.difficulty}
                      </Badge>
                      <span className='text-muted-foreground'>{kit.time}</span>
                    </div>
                    <span className='font-semibold text-brand-coral'>{kit.price}</span>
                  </div>
                  <Button className='w-full py-3'>Add to Box</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button variant='secondary' className='px-8 py-6'>
            View All Kits
          </Button>
        </div>
      </div>
    </section>
  );
}
