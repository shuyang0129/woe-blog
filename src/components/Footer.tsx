import Container from '@/components/Container'
import Divider from '@/components/Divider'
import NewsLetter from '@/components/Footer/NewsLetter'
import SocialConnections from '@/components/Footer/SocialConnections'
import clsx from 'clsx'
import { Fragment, memo } from 'react'

function Footer() {
  return (
    <Fragment>
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <Container className={clsx('pb-8', 'pt-16', 'sm:pt-24', 'lg:pt-32')}>
          <Divider />
          <NewsLetter className={clsx()} />
          <Divider />
          <div className={clsx('pt-8', 'md:flex', 'md:items-center', 'md:justify-between')}>
            <SocialConnections className={clsx('md:order-2')} />
            <p
              className={clsx(
                'mt-8',
                'text-xs',
                'leading-5',
                'text-gray-500',
                'md:order-1 md:mt-0'
              )}
            >
              &copy; 2023 Shuyang Chou. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </Fragment>
  )
}

export default memo(Footer)
