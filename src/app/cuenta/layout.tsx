import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import es_ES from 'antd/locale/es_ES';

export default function CuentaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider locale={es_ES}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
}
