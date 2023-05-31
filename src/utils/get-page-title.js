import defaultSettings from '@/settings'

const title = defaultSettings.title || '居然之家招采平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
