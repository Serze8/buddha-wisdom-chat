const adminEmails = ['zhogun@gmail.com']

export function isAdmin(email: string | null | undefined): boolean {
  return adminEmails.includes(email?.toLowerCase() ?? '')
}
