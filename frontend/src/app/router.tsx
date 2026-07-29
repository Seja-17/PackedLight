import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { BlogsPage } from '@/pages/BlogsPage'
import { CommunityPage } from '@/pages/CommunityPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { ExplorePage } from '@/pages/ExplorePage'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PackingChecklistPage } from '@/pages/PackingChecklistPage'
import { SignupPage } from '@/pages/SignupPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'explore', element: <ExplorePage /> },
      { path: 'blogs', element: <BlogsPage /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'packing-checklist', element: <PackingChecklistPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
